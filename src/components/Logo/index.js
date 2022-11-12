import './style.scss';

export const Logo = ({ withSubstring }) => {
  return (
    <div className='logo'>
      HomeBuddy<span className='logo__dot'>.</span>
      {withSubstring && <p className='logo__substring'>for homeowners</p>}
    </div>
  );
};
