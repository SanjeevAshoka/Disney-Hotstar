import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';
const Home = (props) =>{
    return <Container>
      <ImageSlider />
     <Viewers />
     <Recommends />
     <NewDisney />
     <Originals />
     <Trending />
    </Container>
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    // min-height: 100%;
    overflow-x:hidden;
    display: block;
    top: 84px;
    padding: 0 calc(3.5vw + 3px);

    &:after {
        background: url("/images/home-background.png") center center / cover
          no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
      }

    // background: url('/images/home-background.png');

`
export default Home;