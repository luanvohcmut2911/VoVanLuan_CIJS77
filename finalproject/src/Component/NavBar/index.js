import * as React from 'react';
import { 
    alpha,
    styled,
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
    InputBase,
} from '@mui/material';
// import { SearchIcon } from '@mui/icons-material';
import { useLocation, useNavigate, createSearchParams } from 'react-router-dom';
import UserImage from '../../Asset/Gura.jpg';

const pages = ['Shows', 'Actor'];
const settings = ['Logout'];
export const NavBar = ()=>{
    const navigate = useNavigate();
  const [LogIn, setLogIn] = React.useState(false);
  const handleClickLogIn = () =>{
    setLogIn(true);
    navigate('/');
  };


  const [anchorElNav, setAnchorElNav] = React.useState(
    false
  );
  const [anchorElUser, setAnchorElUser] = React.useState(
    false
  );
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    if(pages.includes(page)){
      navigate(`/${page}`);
    }
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    if(setting==='Logout'){
      setLogIn(false);
      navigate('/');
    };
  };
  const Search = styled('div')(({ theme }) => ({ // search bar
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({ // children of search bar
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({ // css for input
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      display: 'inline-block',
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '50ch',
      },
    },
  }));
  const location = useLocation();
  const handleClickSearchBar = (event) =>{
    if(event.key==='Enter'){
      console.log(location.pathname);
      navigate ({
        pathname: "search",
        search: `?${createSearchParams({
          q: `${event.target.value}`
        })}`
      });
      window.location.reload();
    }
  };

  return (
    <AppBar position='sticky' style={{ background: '#3282B8' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} href='/'/> { /* Icon for logo */ } */
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '0.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            HeatTV
          </Typography> {/* Logo */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              {/* <MenuIcon /> */}
            </IconButton> {/* Icon for list option when browser is small */}
            <Menu 
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={()=>{
                  handleCloseNavMenu(page);
                }}>
                  <Typography textAlign='center' >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>{/* Show List option when browser is small */}
          </Box>
          <Search>
            <SearchIconWrapper>
              {/* <SearchIcon /> */}
            </SearchIconWrapper>
            <StyledInputBase 
              id = 'searchBar'
              onKeyPress={(event)=>{
                handleClickSearchBar(event);
              }}
              placeholder='Search Shows and People'
              inputProps={{ 'aria-label': 'search'}}
            />
            {/* <button type='button' id='btn' >Search</button> */}
          </Search> {/* Search bar */}
          <Typography
            variant='h5'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 } } />  */}
          </Typography>{/* When the screen is small enough */}
          {/* </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>{
                  handleCloseNavMenu(page);
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {
              LogIn ? (
                <Tooltip title='Open settings'>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt='UserImage' src={UserImage} /> 
                    {/* Login Backend */}
                  </IconButton>
                </Tooltip>
              ) : (
                <Button sx={{ my: 2, color: 'white', display: 'block' }} type = 'button' onClick = {handleClickLogIn}>Log In With Google</Button>
              )
            }
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={()=>{
                  handleCloseUserMenu(setting);
                }}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

