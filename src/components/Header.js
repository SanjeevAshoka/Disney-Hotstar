import styled from 'styled-components';
import { auth, provider } from '../firebase';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate  } from 'react-router-dom';
import { selectUserEmail, selectUserPhoto, selectUserName,setUserLoginDetails, setSignOutState } from '../features/user/userSlice';
import { useEffect } from 'react';
const Header = (props)=>{
    const dispatch= useDispatch();
    const history= useNavigate();
    const userName= useSelector(selectUserName);
    const userPhoto= useSelector(selectUserPhoto);
    const userEmail= useSelector(selectUserEmail);

    useEffect(()=> {
        auth.onAuthStateChanged( async (user)=> {
            if(user) {  
                setUser(user);
                history('/home')
            }
        })
    },[userName] );

    const handleAuth = ()=>{
        if(!userName){
            auth.signInWithPopup(provider).then((result)=> {
                console.log("res=", result);
                setUser(result.user.multiFactor.user);
                console.log("res=", result.user.multiFactor.user);
            }).catch((error)=> {alert(error.message)});
        }
        else if(userName){
            auth.signOut()
            .then(()=>{
                dispatch(setSignOutState());
                history('/')
            })
            .catch(error=> { alert(error.message)})
        }

    }
const setUser = (res)=>{
        dispatch(setUserLoginDetails({
            name: res.displayName,
            email: res.email,
            photo: res.phtotoURL 
        }))
    }

    return <Nav>
        <Logo>
            <img src='/images/logo.svg' alt="Disney+" />
        </Logo>
        {
            !userName ? <Login onClick={handleAuth}>Login</Login>: <>
                    <NavMenu>
            <a href= "/Home">
                <img src="/images/home-icon.svg" alt="HOME" />
            <span>HOME</span>  </a>
            <a href= "/Home">
                <img src="/images/search-icon.svg" alt="HOME" />
            <span>SEARCH</span>  </a>
            <a href= "/Home">
                <img src="/images/watchlist-icon.svg" alt="HOME" />
            <span>WATCHLIST</span>  </a>
            <a href= "/Home">
                <img src="/images/original-icon.svg" alt="HOME" />
            <span>ORIGINALS</span>  </a>
            <a href= "/Home">
                <img src="/images/movie-icon.svg" alt="HOME" />
            <span>MOVIES</span>  </a>
            <a href= "/Home">
                <img src="/images/series-icon.svg" alt="HOME" />
            <span>SERIES</span>  </a>
        </NavMenu>
        <SignOut>
        <UserImg   src= {userPhoto} alt ={userName} />
        <DropDown>
            <span onClick={handleAuth}>Sign Out</span>
        </DropDown>
        </SignOut>
        </>
        }

    </Nav>
}

const Nav = styled.nav`
    position: fixed;
    top:0; left:0; right:0;
    height: 80px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0px 36px;
    letter-spacing: 3px;
    z-index: 3;
`
const Logo = styled.a`
    padding: 0;
    width:80px;
    margin-top: 4px;
    margin-bottom: 4px;
    max-height:70px;
    font-size:0;
    display: inline-block;
    img{
        display: block;
        width: 100%
    }

`
const Login= styled.a`
    background-color: rgba(0,0,0,0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all .2s ease 0s;
    &:hover {
        background-color: #f9f9f9;
        color:  #000;
        border-color: transparent;
        cursor: pointer;
    }

`
const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;
    // align-items: center;
    a{
        display: flex;
        align-item: center;
        padding: 0 12px;
         img {
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
         }
         span {
            color: rgb(249, 249, 249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;
        
         &:before {
            background-color: rgb(249, 249, 249);
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            content: "";
            height: 2px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left-center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94 ) 0s;
            visibility: hidden;
            width: auto;
        }
    }
       &:hover{
        span: before {
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }
    }
}

    @media(max-width: 768px){
        display: none;
    }

`
const UserImg =styled.img`
    height: 100%;    
`
const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right:0px;
    background: rgb(19,19,19);
    border: 2px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb( 0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 1px;
    width: 100px;
    opacity: 0;
`
const SignOut = styled.div`
    position: relative;    
    height: 48px;
    width: 55px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    ${UserImg} {
        border-raius: 50%;
        width:100%;
        height:100%;

    }
    &: hover{
        ${DropDown} {
            opacity: 1;
            transition-duration: 1s;
        }
    }
`

export default Header;