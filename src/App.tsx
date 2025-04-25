import { useState } from 'react';
import { Button, CheckBox } from './Components';
import image from './assets/images/n7yS0muRTe6kqlUcZjhhOA.webp';
import classes from './App.module.scss';

const App: React.FC = () => {
  const [isCheckeds, setIsCheckeds] = useState({ refresh: false, enabled: false });
  const [showCat, setShowCat] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className={classes.app}>
      <div className={classes.app__wrap}>
        <CheckBox
          label='Enabled'
          checked={isCheckeds.enabled}
          onChange={(e) => setIsCheckeds((prev) => ({ ...prev, enabled: !prev.enabled }))}
        />

        <CheckBox
          label='Auto-refresh every 5 second'
          checked={isCheckeds.refresh}
          onChange={(e) => setIsCheckeds((prev) => ({ ...prev, refresh: !prev.refresh }))}
          disabled={!isCheckeds.enabled || isDisabled}
        />

        <div className={classes.app__actions}>
          <Button disabled={!isCheckeds.enabled} onClick={() => setShowCat((prev) => !prev)}>
            get cat
          </Button>

          <Button disabled={!isCheckeds.enabled} onClick={() => setIsDisabled((prev) => !prev)}>
            {isDisabled ? 'Активировать' : 'Деактивировать'} чекбокс
          </Button>
        </div>

        {showCat ? (
          <div className={classes.app__image}>
            <img src={image} alt='cat' />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default App;
