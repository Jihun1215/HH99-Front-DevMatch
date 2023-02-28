import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Detail from '../Pages/Detail';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Mypage from '../Pages/Mypage';
import NotFound from '../Pages/NotFound';




const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/project/:id' element={<Detail />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/mypage' element={<Mypage />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router