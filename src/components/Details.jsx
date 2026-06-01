import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Details = ({users}) => {
    const {username} = useParams();
    const [searchParams] = useSearchParams()
    return(
        <div>
            Detils
            <p>valor de la variable username: 
                {username}
            </p>
            <p>valor del parametro react = {searchParams.get("react")}</p>
        </div>
    )
};