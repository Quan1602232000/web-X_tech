import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts, totalRow } from '../../actions/RentmotoActions';
import Motobike from '../../components/Motobike/Motobike';
import { Filtermoto, SearchName } from '../../actions/FilterActions';
import './RentMotoScreen.css';

function RentMotoScreen(props) {

    const [page, setPage] = useState(1);
    const [Loaixe, setLoaixe] = useState('ALL');
    const [gia, setGia] = useState('ALL');
    const [searchtext, setSearchtext] = useState('')
    const city = props.location.search ? props.location.search.split("=")[1] : '';
    // const productList = useSelector((state) => state.productList);
    // const productlistcount = useSelector((state) => state.productcount);
    // const { product, loading, error } = productList;
    const productsearch = useSelector((state) => state.productsearch)
    const { searchproducts } = productsearch;
    const Totalrow = useSelector((state) => state.TotalRow);
    const { total } = Totalrow;
    const productfilter = useSelector((state) => state.productfilter)
    const { products, loading, error } = productfilter;
    const dispatch = useDispatch();
    const Searchhandle = value => {
        setSearchtext(value);
        // searchData(value);
    }
    // const searchData = value =>{
    //     const tolowerCaseValue=value.toLowerCase().trim();
    //     if(!tolowerCaseValue){
    //         setData(searchproducts)
    //     }
    //     else{
    //         const searchDT=[];
    //         setData(searchDT);
    //     }
    // }
    const downpagenumber = () => {
        page - 1 >= 1 ? setPage(page - 1) : setPage(page)
    }
    const Uppagenumber = () => {
        page + 1 <= Math.ceil(total._totalRows / 6) ? setPage(page + 1) : setPage(page)
    }
    useEffect(() => {
        dispatch(totalRow());

        return () => {
            //
        };
    }, []);
    useEffect(() => {
        dispatch(SearchName(searchtext, page, city));

        return () => {
            //
        };
    }, [searchtext, page]);
    // useEffect(() => {
    //     dispatch(listProducts(page));

    //     return () => {

    //     };
    // }, [page]);
    useEffect(() => {
        dispatch(Filtermoto(Loaixe, gia, page, city));

        return () => {

        };
    }, [Loaixe, gia, page]);
    return (
        <div className="container background mt-3">

            <div>
                <div>
                    <div class="row">
                        <h3 class="tittle-w3l">Thu?? Xe ???? N???ng
                    
				            <span class="heading-style">
                                <i></i>
                                <i></i>
                                <i></i>
                            </span>
                        </h3>
                    </div>
                    <div class="row mt-3">
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div class="input-group mb-3 ml-5">
                                <div class="input-group-prepend search-products">
                                    <button class="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i></button>
                                </div>
                                <input type="text" value={searchtext} onChange={(e) => Searchhandle(e.target.value)} class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <div class="row">
                                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                    <div class="input-group mb-3 ml-5">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text" for="inputGroupSelect01">Lo???i xe</label>
                                        </div>
                                        <select value={Loaixe} onChange={(e) => setLoaixe(e.target.value)} class="custom-select" id="inputGroupSelect01">
                                            <option value="ALL">T???t C???</option>
                                            <option value="Xe S???">Xe S???</option>
                                            <option value="Xe Tay Ga">Xe Tay Ga</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div class="input-group mb-3 ml-4">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text" for="inputGroupSelect01">Gi??</label>
                                        </div>
                                        <select value={gia} onChange={(e) => setGia(e.target.value)} class="custom-select" id="inputGroupSelect01">
                                            <option value="ALL">T???t c???</option>
                                            <option value="asc">T??? Th???p ?????n cao</option>
                                            <option value="desc">T??? cao ?????n th???p</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <ul className="filter-moto-list">
                    <li className="filter-moto-item">

                    </li>
                    <li className="filter-moto-item">

                    </li>
                </ul> */}
            </div>
            {searchtext != '' ? (<ul class="list-moto animated wow slideInLeft" data-wow-delay=".5s">
                {searchproducts.map((product) => (
                    <Motobike key={product.id} product={product}></Motobike>
                ))
                }
            </ul>) : (loading ? <div>Loading...</div> :
                error ? <div>{error}</div> :
                    (products.length > 0 ?
                        <ul class="list-moto animated wow slideInLeft" data-wow-delay=".5s">
                            {products.map((product) => (
                                <Motobike key={product.id} product={product}></Motobike>
                            ))
                            }
                        </ul> : (
                            <div class="not-found">

                                <img src="https://lh3.googleusercontent.com/proxy/RG39UHd_sx7seuQ9ZgoTmbAr21DIxn9gv_jfMUL4A6IVNJbshp-Uv0s-uqfLC8dGWHhKsfD5mrHegGJWDUaZFCjvjSNwN18MWMNcVOU" class="img-responsive text-center" alt="Image" />

                            </div>
                        )))}
            {/* <div className="pagination">
                <li className="li_pagination">
                    <button onClick={downpagenumber} type="button" class="btn btn-outline-primary">Back</button>
                </li>
                <li className="li_pagination">{page}</li>
                <li className="li_pagination">
                    <button onClick={Uppagenumber} type="button" class="btn btn-outline-primary">Next</button>
                </li>
            </div> */}
            <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center ">
                        <li class="page-item">
                            <a onClick={downpagenumber} class="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a onClick={Uppagenumber} class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            {/* <Motobike></Motobike> */}
        </div>
    )
}

export default RentMotoScreen
