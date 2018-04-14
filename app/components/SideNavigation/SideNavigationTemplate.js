import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//shared
import {SideUl,SideLi} from 'shared/SideNavigationStyle';
import Title from 'shared/Title';
import fiveStartYelp from 'shared/Shapes/5StarYelp.svg';
import Button from 'shared/Button';
import Div from 'shared/Div';
//------

const SideNavigationTemplate = (props) =>{
  return (
    <SideUl>

      {props.Line0 &&
        <Link to={props.line0Destination}>
          <SideLi><Button active={props.Line0Active} themed width="100%"><Title>{props.Line0}</Title></Button></SideLi>
      </Link>

    }
    {props.Line1 &&
      <Link to={props.line1Destination}>
        <SideLi><Button active={props.Line1Active} themed width="100%"><Title>{props.Line1}</Title></Button></SideLi>
      </Link>
    }

    {props.Line2 &&
      <Link to={props.line2Destination}>
        <SideLi><Button active={props.Line2Active} themed width="100%"><Title>{props.Line2}</Title></Button></SideLi>
    </Link>
    }

    {props.Line3 &&
      <Link to={props.line3Destination}>
        <SideLi><Button active={props.Line3Active} themed width="100%"><Title>{props.Line3}</Title></Button></SideLi>
      </Link>
    }
    {props.Line4 &&
      <Link to={props.line4Destination}>
        <SideLi><Button active={props.Line4Active} themed width="100%"><Title>{props.Line4}</Title></Button></SideLi>
      </Link>
    }
    {props.Line5 &&
      <Link to={props.line5Destination}>
        <SideLi><Button active={props.Line5Active} themed width="100%"><Title>{props.Line5}</Title></Button></SideLi>
      </Link>
    }
    {props.Line6 &&
      <Link to={props.line6Destination}>
        <SideLi><Button active={props.Line6Active} themed width="100%"><Title>{props.Line6}</Title></Button></SideLi>
      </Link>
    }
    {props.Line7 &&
      <Link to={props.line7Destination}>
        <SideLi><Button active={props.Line7Active} themed width="100%"><Title>{props.Line7}</Title></Button></SideLi>
      </Link>
    }
    {props.Line8 &&
      <Link to={props.line8Destination}>
        <SideLi><Button active={props.Line8Active} themed width="100%"><Title>{props.Line8}</Title></Button></SideLi>
      </Link>
    }
    {props.Line9 &&
      <Link to={props.line9Destination}>
        <SideLi><Button active={props.Line9Active} themed width="100%"><Title>{props.Line9}</Title></Button></SideLi>
      </Link>
    }
    {props.Line10 &&
      <Link to={props.line10Destination}>
      <SideLi><Button active={props.Line10Active} themed width="100%"><Title>{props.Line10}</Title></Button></SideLi>
    </Link>
    }

    </SideUl>
  )
}
SideNavigationTemplate.propTypes = {
}
export default SideNavigationTemplate;
