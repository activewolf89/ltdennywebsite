import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled,{css} from 'styled-components';
//shared
import Div from 'shared/Div';
import P from 'shared/P';
import Title from 'shared/Title';
import FiveStar from 'shared/Shapes/5StarYelp.svg';
import OwlCarousel from 'react-owl-carousel';

const AdjustableDiv = styled(Div)`
  width: 200px;
  height: 200px;
  @media screen and (min-width:400px){
    width: 300px;
    height: 300px
  };
  @media screen and (min-width:768px){
    width: 400px;
    height: 400px
  };
`;
//------

const HomePageRotation = (props) =>{
  return (
    <Div display="flex" flexDirection='column' justifyContent='center' alignItems='center' padding="40px 0">
      <Div margin="0 0 30px 0">
      <Title bold>{props.mainTitle}</Title>
    </Div>
      {
        props.secondaryTitle &&
        <Title fontSize="14px" color="gray">{props.secondaryTitle}</Title>
      }
      <Div width="100%" overflow="hidden" >
        <OwlCarousel margin={15} items={1}  autoWidth>
          {
          props.image1 &&
            <AdjustableDiv>
                <img src={props.image1} style={{width:'100%',height:'60%'}} />
                <Div>
                  <Title bold>{props.image1MainDescription}</Title>
                  <Title fontSize="14px" color="gray">{props.image1SecondaryDescription}</Title>
                </Div>
            </AdjustableDiv>
          }
          {
          props.image2 &&
            <AdjustableDiv>
                <img src={props.image2} style={{width:'100%',height:'60%'}}  />
                <Div margin="0 40px">
                  <Title bold>{props.image2MainDescription}</Title>
                  <Title fontSize="14px" color="gray">{props.image2SecondaryDescription}</Title>
                </Div>
            </AdjustableDiv>
        }
        {
        props.image3 &&
          <AdjustableDiv>
              <img src={props.image3} style={{width:'100%',height:'60%'}}  />
              <Div>
                <Title bold>{props.image3MainDescription}</Title>
                <Title fontSize="14px" color="gray">{props.image3SecondaryDescription}</Title>
              </Div>
          </AdjustableDiv>
        }
        {
        props.image4 &&
          <AdjustableDiv>
              <img src={props.image4} style={{width:'100%',height:'60%'}}  />
              <Div>
                <Title bold>{props.image4MainDescription}</Title>
                <Title fontSize="14px" color="gray">{props.image4SecondaryDescription}</Title>
              </Div>
          </AdjustableDiv>
        }
        {
        props.image5 &&
          <AdjustableDiv>
              <img src={props.image5} style={{width:'100%',height:'60%'}}  />
              <Div>
                <Title bold>{props.image5MainDescription}</Title>
                <Title fontSize="14px" color="gray">{props.image5SecondaryDescription}</Title>
              </Div>
          </AdjustableDiv>
        }
        {
        props.image6 &&
          <AdjustableDiv>
              <img src={props.image6} style={{width:'100%',height:'60%'}}  />
              <Div>
                <Title bold>{props.image6MainDescription}</Title>
                <Title fontSize="14px" color="gray">{props.image6SecondaryDescription}</Title>
              </Div>
          </AdjustableDiv>
        }
        {
        props.image7 &&
          <AdjustableDiv>
              <img src={props.image7} style={{width:'100%',height:'60%'}}  />
              <Div>
                <Title bold>{props.image7MainDescription}</Title>
                <Title fontSize="14px" color="gray">{props.image7SecondaryDescription}</Title>
              </Div>
          </AdjustableDiv>
        }
        {
        props.image8 &&
          <AdjustableDiv>
              <img src={props.image8} style={{width:'100%',height:'60%'}}  />
              <Div>
                <Title bold>{props.image8MainDescription}</Title>
                <Title fontSize="14px" color="gray">{props.image8SecondaryDescription}</Title>
              </Div>
          </AdjustableDiv>
        }
        {
        props.image9 &&
          <AdjustableDiv>
              <img src={props.image9} style={{width:'100%',height:'60%'}}  />
              <Div>
                <Title bold>{props.image9MainDescription}</Title>
                <Title fontSize="14px" color="gray">{props.image9SecondaryDescription}</Title>
              </Div>
          </AdjustableDiv>
        }
        </OwlCarousel>
      </Div>

    </Div>
  )
}
HomePageRotation.propTypes = {
  mainTitle: PropTypes.string,
  secondaryTitle: PropTypes.string,
  image1MainDescription: PropTypes.string,
  image1SecondaryDescription: PropTypes.string,
  image2MainDescription: PropTypes.string,
  image2SecondaryDescription: PropTypes.string,
  image3MainDescription: PropTypes.string,
  image3SecondaryDescription: PropTypes.string,
  image4MainDescription: PropTypes.string,
  image4SecondaryDescription: PropTypes.string,
  image5MainDescription: PropTypes.string,
  image5SecondaryDescription: PropTypes.string,
  image6MainDescription: PropTypes.string,
  image6SecondaryDescription: PropTypes.string,
  image7MainDescription: PropTypes.string,
  image7SecondaryDescription: PropTypes.string,
  image8MainDescription: PropTypes.string,
  image8SecondaryDescription: PropTypes.string,
  image9MainDescription: PropTypes.string,
  image9SecondaryDescription: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  image4: PropTypes.string,
  image5: PropTypes.string,
  image6: PropTypes.string,
  image7: PropTypes.string,
  image8: PropTypes.string,
  image9: PropTypes.string,
}
export default HomePageRotation;
