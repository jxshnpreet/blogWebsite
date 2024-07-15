import Image from 'next/image'
import React from 'react';
import styled from 'styled-components';
import { Lightning, Time } from '../../../public/icons';
import Trending1 from '../../../public/images/Trending1.png';
import Trending2 from '../../../public/images/Trending2.png';
import Trending3 from '../../../public/images/Trending3.png';
import Trending4 from '../../../public/images/Trending4.png';

const H2 = styled.h2`
  font-size: 17px;
  font-weight: 700;
  line-height: 25.5px;
  width: 75%;
`;

const Info = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #808080;
`;


const ImageWrapper = styled.div`
    position: relative;
    svg {
        position: absolute;
        top: -15px;
        left: -15px;
    }
`

const TrendingArticle = ({title, date} : { title : string, date : string}) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="me-2 d-flex align-items-center">
        <ImageWrapper>
        <Image src={Trending1} alt="Article-1" height={76.36} width={105} />
        <Lightning />
        </ImageWrapper>
      </div>
      <div className="p-2">
        <H2 className="mt-3">Five things You Need to Know to Start Your Day</H2>
        <Info className='d-flex align-items-center'>
          <Time className='me-1' /> October 19, 2022 - 2 min
        </Info>
      </div>
    </div>
  )
}

export default TrendingArticle