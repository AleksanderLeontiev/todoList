import React from 'react';
interface IList {
   navbar: string
    path:string
}
const List:React.FC<IList> = (list: IList):any => {
    return (
        <button style={{width: "150px", height: "50px", fontWeight: 700}}>
            {list.navbar}
        </button>
    );
};

export default List;