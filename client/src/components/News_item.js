import React from 'react'

export default function News_item(props) {
    return (
        <>
            <div className="card col flex-fill" style={{ margin : "10px" }} >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.urlToImage} alt="Not_found" className="img-fluid rounded-start my-3" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                        </div>
                    </div>
                </div>
                <p className="card-text">{props.description}</p>
                <p className="card-text" >
                    <a href={props.url} target="_blank" >Read More...</a>
                </p>
            </div>
        </>
    )
}



