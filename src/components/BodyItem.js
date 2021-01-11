import React from 'react'
import { Link } from 'react-router-dom'


function BodyItem() {
    return (
        <>
            <li className="body__item">
                <Link className="body__item__link">                                     
                    <div className="div body__item__info">
                        <h5 className="body__item__text">
                        </h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default BodyItem