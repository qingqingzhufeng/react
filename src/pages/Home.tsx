import * as React from 'react';
import { Button } from 'antd';
import { img } from '../assets';

const Home = () => {
  return (
    <div>
      <img src={img.img1} style={{ height: 600 }} alt="图片" />
      <Button type="primary">按钮</Button>
    </div>
  );
};

export default Home;
