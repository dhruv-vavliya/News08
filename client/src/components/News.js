import React, { useState, useEffect } from 'react'
import News_item from './News_item'
import Spinner from './Spinner';
import TopBar from './TopBar';

export default function News(props) {
    const [data, setdata] = useState(null);
    const [page, setPage] = useState(1);
    const [page_size, setPage_size] = useState(4);
    const [tot, setTot] = useState(0);
    const [load, setLoad] = useState(false);

    document.title = "News08 : " + props.category;
    useEffect(() => {
        async function get_data() {
            setLoad(true);
            let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=5391856c6d6a441aadff34277ae1f772&category=${props.category}&page=${page}&pageSize=${page_size}`);
            response = await response.json();
            setdata(response.articles);
            setTot(response.totalResults);
            setLoad(false);
        }
        get_data();
    }, [])

    const update = async (cur_page) => {
        setLoad(true);
        let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=5391856c6d6a441aadff34277ae1f772&category=${props.category}&page=${cur_page}&pageSize=${page_size}`);
        response = await response.json();
        setdata(response.articles);
        setPage(cur_page);
        setLoad(false);
    }

    const prenews = async () => {
        update(page - 1);
    }

    const nxtnews = async () => {
        update(page + 1);
    }

    return (
        <div>
            <div className="container my-3">
                {load && <TopBar />}
                <h1 style={{ marginTop: "60px" }} >Top News</h1>
                {load && <Spinner />}

                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1  d-flex " >
                    {
                        data && data.map((e) => {       // make array of components( News_item ) and return it. 
                            return <News_item key={e.url} urlToImage={e.urlToImage} title={e.title} description={e.description} url={e.url} />
                        })
                    }
                </div>
                <div className='container d-flex justify-content-between' >
                    <button disabled={page <= 1} type="button" className="btn btn-primary" onClick={prenews}  >&laquo; Previous</button>
                    <button disabled={data && page === Math.ceil(tot / page_size)} type="button" className="btn btn-primary" onClick={nxtnews} >Next &raquo;</button>
                </div>
            </div>
        </div>
    )
}
