import Buttons from "./Buttons";

const DUMMYDATA=[
    {
        id:'1',
        name:'Stephen',
        age:'22',
        gen:'M'
    },
    {
        id:'4',
        name:'Olga',
        age:'22',
        gen:'F'
    },
    {
        id:'3',
        name:'Raphael',
        age:'22',
        gen:'M'
    }
];


function Users(props){
    return(
        <div className="card">
            <section>
                <ul>
                    {DUMMYDATA.map((users) => {
                        return( 
                            <li key={users.id}>{users.name}</li>
                            
                            
                        );
                    })}
                </ul>
            </section>        
            <Buttons />
        </div>
        
    );
}

export default Users;