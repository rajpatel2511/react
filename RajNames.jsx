const RajNames = (props) =>{
        return(<ul>
        {
            props.names.map((name)=>{
                return <li key={name}>{name}</li>
            })
        }

    </ul>);
};

export default RajNames;