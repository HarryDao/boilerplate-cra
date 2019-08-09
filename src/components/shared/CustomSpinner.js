import React from 'react';
import { Fade } from '../../styles/transition';

const CustomSpinner = (props) => {
    const {
        inProp,
        hideBackground
    } = props;

    return Fade({ in: inProp }, style => {
      const className = `custom-spinner ${hideBackground ? 'hide-background': ''} `
      return (
        <div
          className={className}
          style={style}
        >
          <div className='inner'>
            <div className='spinner'>
              <div className='inner'/>
            </div>
          </div>
        </div>
      );
    });
}

export { CustomSpinner };