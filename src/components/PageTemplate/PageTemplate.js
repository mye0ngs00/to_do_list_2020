import React from 'react';
import styles from './PageTemplate.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/*
    페이지 템플릿을 위한 컴포넌트. 페이지의 틀, 타이틀, 콘텐츠 등 속성 설정.
*/

const PageTemplate = ({children}) => {
    return (
        <div className = {cx('page-template')}>
            <h1>Scheduler</h1>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    );
}

export default PageTemplate;