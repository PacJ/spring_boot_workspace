import { useNavigate, useParams } from 'react-router-dom';
// [1] useParams()
// http://localhost:3000/product/1
// http://localhost:3000/product/2

// useParams()를 이용해서 파라미터를 받는다.



/*  
[2] useNavigate()
    - Link 컴포넌트를 사용하지 않고 다른 페이지로 이동해야 하는 경우, 이전/다음 등에 사용되는 hook이다.
    - replace 옵션을 사용하면 페이지를 이동할 때 히스토리를 남기지 않는다. 
    기본은 {replace : false} 이므로 히스토리를 남긴다.
    - <button onClick={() => navigate('/', {replace : true})}>HOME</button>
*/

const Detail = () => {
    // const productid = useParams().productid; 파라미터가 하나일 때는 이렇게 작성 가능.

    const {productid} = useParams();

    const navigate = useNavigate();

    return (
        <div>
            <h2>상품 상세 페이지</h2>
            <p>{productid} 번 상세 페이지입니다.</p>

            <ul>
                <li>
                    <button onClick={() => navigate(-1)}>
                        LIST
                    </button>
                </li>
                <li>
                    <button onClick={() => navigate('/')}>
                        HOME
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Detail;