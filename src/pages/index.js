import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Trang chủ"
      description="Trang chủ của website">
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1>Chào mừng đến với website của chúng tôi</h1>
          <p>Nơi chia sẻ kiến thức và thông tin hữu ích</p>
        </div>
      </div>
      <main className={styles.main}>
        <div className={styles.container}>
          <h2>Nội dung chính</h2>
          <p>Đây là nội dung chính của trang web.</p>
        </div>
      </main>
    </Layout>
  );
} 