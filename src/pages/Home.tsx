import * as React from 'react';
import { Button } from 'antd';
import { img } from '../assets';

const Home = () => {
  console.log(img.img1)
  return (
    <div>
      <img src={img.img1} alt="图片" />
      <Button type="primary">按钮</Button>
    </div>
  );
};

export default Home;
