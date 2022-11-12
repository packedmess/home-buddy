import './style.scss';

export const Logo = ({ withSubstring, className }) => {
  return (
    <div className={`logo ${className}`}>
      HomeBuddy<span className='logo__dot'>.</span>
      {withSubstring && <p className='logo__substring'>for homeowners</p>}
    </div>
  );
};
