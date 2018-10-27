import styled from 'styled-components';
import { Form } from 'formik';
import {
  fontPrimary,
  fontSecondary,
  colorPrimary,
  colorBlack
} from './variables';
import Link from 'next/link';
import './normalize';
import media from './media';

const Container = styled.div`
  max-width: 1400px;
  width: 90%;
  margin: 0 auto;
  display: ${({ flex }) => (flex ? 'flex' : 'block')};
  padding: ${({ p }) => p || 0};
  ${media.phone`
    flex-direction: column;
  `};
  /* @media only screen and (max-width: 1000px) {
    flex-direction: column;
  } */
`;

const Body = styled.div`
  /* margin-top: 80px; */
`;

const Flex = styled.div`
  flex: ${({ flex }) => flex || 0};
  display: flex;
  width: ${({ w }) => w || '100%'};
  height: ${({ h }) => h || 'inherit'};
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  justify-content: ${({ justify }) => justify || 'default'};
  align-items: ${({ align }) => align || 'default'};
  margin: ${({ m }) => m || 0};
  padding: ${({ p }) => p || 0};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'no-wrap')};
  ${({ extra }) => extra || ''};
  ${media.phone`
    flex-direction: column;
    ${({ res = '' }) => res}
  `};
`;

const Image = styled.img`
  height: ${({ h }) => h || 'auto'};
  width: ${({ w }) => w || 'auto'};
  border-radius: ${({ round, roundness }) =>
    round ? '50%' : roundness || '0'};
  box-shadow: ${({ bs }) => bs || '0px 3px 6px rgba(0, 0, 0, 0.21)'};
  padding: ${({ p }) => p || 'auto'};
  ${({ extra = '' }) => extra} 
  ${media.phone`
    width: ${({ resW }) => resW || 'auto'};
    height:  ${({ resH }) => resH || 'inherit'};
    ${({ res = '' }) => res}
  `};
`;

const Heading = styled.h2`
  font-family: ${({ secondary }) => (secondary ? fontSecondary : fontPrimary)};
  font-size: ${({ fs }) => fs || '30px'};
  margin: ${({ m }) => m || 0};
  padding: ${({ p }) => p || 0};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  color: ${({ col }) => col || 'rgb(0, 0, 0)'};
  ${media.phone`
    font-size: ${({ resFs }) => resFs || 'inherit'};
    ${({ res = '' }) => res};
  `};
`;

const Text = styled.p`
  font-family: ${({ secondary }) => (secondary ? fontSecondary : fontPrimary)};
  font-weight: ${({ fw = 'normal' }) => fw};
  letter-spacing: ${({ ls = 'normal' }) => ls};
  font-size: ${({ fs }) => fs || '16px'};
  margin: ${({ m }) => m || 0};
  padding: ${({ p }) => p || 0};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  color: ${({ col }) => col || 'rgb(0, 0, 0)'};
  line-height: ${({ lheight }) => lheight || 1};
  width: ${({ w }) => w || 'auto'};
  ${media.phone`
    ${({ res = '' }) => res}
  `};
`;

const Div = styled.div`
  margin: ${({ m }) => m || 0};
  padding: ${({ p }) => p || 0};
`;

const A = styled.a`
  text-decoration: none;
  font-size: ${({ fs }) => fs || '18px'};
  font-family: ${fontPrimary};
  padding: ${({ p }) => p || 0};
  transition: padding 0.2s ease-out;
  transition: color 0.15s ease-in;
  cursor: pointer;
  color: black;
  &:after {
    content: ' ';
    display: block;
    width: 0;
    height: 2px;
    background: ${colorBlack};
    transition: width 0.15s ease-in;
  }
  &:hover {
    &:after {
      background: #052391;
      width: 100%;
    }
    color: #052391;
  }
  ${({ extra = '' }) => extra};
`;

const StyledLink = ({ children, href = '#', p }) => (
  <Link href={href}>
    <A p={p}>{children}</A>
  </Link>
);

const Wrapper = styled.div`
  width: ${({ w }) => w || 'auto'};
  height: ${({ h }) => h || 'auto'};
  margin: ${({ m }) => m || 'auto'};
  padding: ${({ p }) => p || 'auto'};
  flex: ${({ flex }) => flex || 'auto'};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'no-wrap')};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  ${media.phone`
    ${({ res = '' }) => res}
  `};
`;


const StyledForm = styled(Form)`
  > label {
    display: block;
    padding: 15px 0px 5px 0px;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.7);
  }
  > input {
    width: 100%;
    padding: 7px;
    ${media.phone`
      padding: 5px 0px 5px 5px;
      width: 97%;
    `};
    font-family: ${fontPrimary};
    font-family: 'Open Sans', sans-serif;
    border-radius: 3px;
    border: solid 1px rgba(0, 0, 0, 0.27);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    line-height: 1.5;
    margin-top: ${({ mtop }) => mtop || '0px'};
    &:focus {
      border: solid 1px ${({ bg = colorPrimary }) => bg};
      box-shadow: 0 0 0 0.2rem ${({ bg = colorPrimary }) => bg};
    }
  }
  > select {
    width: 103%;
    padding: 7px;
    ${media.phone`
      padding: 5px 0px;
      width: 100%;
    `};
    font-family: ${fontPrimary};

    border-radius: 3px;
    border: solid 1px rgba(0, 0, 0, 0.27);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    line-height: 1.5;
    &:focus {
      border: solid 1px red;
      box-shadow: 0 0 0 0.2rem rgba(179, 0, 0, 0.3);
    }
  }
  > button {
    border: none;
    font-family: ${fontPrimary};
    font-size: ${({ fs = '18px' }) => fs};
    color: ${({ col = '#fff' }) => col};
    background: ${({ bg = colorPrimary }) => bg};
    cursor: pointer;
    padding: 15px 80px;
    display: inline-block;
    margin: 15px 0;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    outline: none;
    position: relative;
    box-shadow: 0 6px ${({ sCol = colorPrimary }) => sCol};
    border-radius: 5px;
    &:hover {
      box-shadow: 0 4px ${({ sCol = colorPrimary }) => sCol};
      top: 2px;
    }
    &:active {
      box-shadow: 0 0 ${({ sCol = colorPrimary }) => sCol};
      top: 6px;
    }
  }
  > button[type='button'] {
    margin-left: 20px;
  }
`;


const Button = styled.button`
  border: solid 1px ${({ bc }) => bc || 'rgba(0, 0, 0, 0.7)'};
  padding: ${({ p }) => p || '10px 30px'};
  border-radius: 3px;
  background: none;
  transition: all 0.3s ease-out;
  font-family: ${fontPrimary};
  font-size: 20px;
  color: ${({ col }) => col || '#000'};
  > a {
    color: ${({ col }) => col || '#000'};
    transition: all 0.3s ease-out;
    font-family: ${fontPrimary};
    font-size: 20px;
    text-decoration: none;
  }
  &:hover {
    background: ${({ colBg }) => colBg || colorPrimary};
    border-color: ${({ colBg }) => colBg || colorPrimary};
    color: #fff;
    > a {
      color: #fff;
    }
  }
`;

const SecondaryButton = styled.button`
  border: none;
  font-family: ${fontPrimary};
  font-size: ${({ fs = '18px' }) => fs};
  color: ${({ col = '#fff' }) => col};
  background: ${({ bg = colorPrimary }) => bg};
  cursor: pointer;
  padding: 25px 80px;
  display: inline-block;
  margin: 15px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  outline: none;
  position: relative;
  box-shadow: 0 6px ${({ sCol = colorPrimary }) => sCol};
  border-radius: 5px;
  &:hover {
    box-shadow: 0 4px ${({ sCol = colorPrimary }) => sCol};
    top: 2px;
  }
  &:active {
    box-shadow: 0 0 ${({ sCol = colorPrimary }) => sCol};
    top: 6px;
  }
`;

const Background = styled.div`
  background: linear-gradient(to right, ${({ gradient }) => gradient});
  padding: ${({ p }) => p || '0px 0px'};
  /* min-height: ${({ mh }) => mh || '70vh'}; */
`;

export {
  Container,
  Body,
  Flex,
  Image,
  Heading,
  Text,
  Div,
  StyledLink,
  Wrapper,
  Button,
  SecondaryButton,
  Background,
  A,
  StyledForm
};