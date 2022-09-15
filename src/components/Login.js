import styled from 'styled-components';
const Login  = (props)=>{
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
                    <SignUp>GET All There</SignUp>
                    <Description>
                    Get Premium Access to Raya and the Last Dragon for an additional fee with Disney+
                    subscription. As of 10/09/2022, the price of Disney+ and The Disney Bundle will incrrease by $1.
                    </Description>
                    <CTALogoTwo src= "/images/cta-logo-two.png" alt="" />
                </CTA>
            <BgImage />
            </Content>
        </Container>
    )
}


const Container= styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    `
const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position:relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`
const BgImage = styled.div`
    height:100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    background-image: url('/images/login-background.jpg');
    top:0; 
    left:0;
    right:0; 
    z-index:-1;
`
const CTA = styled.div`
    max-width: 850px;
    width: 100%;
    dispaly: flex;
    flex-direction: column;

    // margin-bottom:2vw;
    // max-width: 850px;
    // flex-wrap: wrap;
    // dispaly: flex;
    // flex-direction: column;
    // justify-content: center;
    // margin-top:0;
    // align-item: center;
    // text-align: center;
    // margin-right: auto;
    // margin-left: auto;
    // transition-timing-function: ease-out;
    // transition: opacity 0.2s;
    // width: 100%
    `
const CTALogoOne= styled.img`
    margin-bottom: 12px;
    max-width: 800px;
    min-height: 1px;
    display: block;
    width:100%
`
const SignUp = styled.a`
    // font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    max-width: 810px;
    display: block;
    margin-bottom: 12px;
    letter-spacing: 1.5px;
    font-size: 40px;
    padding: 16.5px;
    border: 1px solid transparent;
    border-radius: 15px;
    &: hover{
        background-color: #0483ee;
    }
    // min-height: 50px;
    // align-item: center;
    // text-align: center;
    `;

const Description = styled.p`
    color: hsla(0,0%, 95.3%, 1);
    font-weight: light;
    font-size: 20px;
    max-width: 780px;
    display: block;  
    margin: 0 0 24px; 
    line-height: 1.5;
    letter-spacing: 1px;
    // font-size: 20px;
    // padding: 16.5px;
`
const CTALogoTwo= styled.img`
    max-width: 800px;
    margin-bottom: 12px;
    display: block;
    width:100%;
    min-height: 50px;
    vertical-align: bottom;
    `
export default Login