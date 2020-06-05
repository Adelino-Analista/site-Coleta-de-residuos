import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#modal': {
    'backgroundColor': '#0e0a14ef',
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'width': [{ 'unit': 'vw', 'value': 100 }],
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'transition': '400ms'
  },
  '#modalhide': {
    'display': 'none'
  },
  '#modal header': {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'space-between',
    'marginBottom': [{ 'unit': 'px', 'value': 48 }]
  },
  '#modal header a': {
    'backgroundImage': 'url("../assets/x.svg")',
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'display': 'flex',
    'fontSize': [{ 'unit': 'px', 'value': 0.01 }]
  },
  '#modal header h1': {
    'color': 'white',
    'lineHeight': [{ 'unit': 'px', 'value': 36 }],
    'fontSize': [{ 'unit': 'px', 'value': 42 }]
  },
  '#modal form label': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 16 }],
    'color': 'white',
    'display': 'block',
    'marginBottom': [{ 'unit': 'px', 'value': 8 }]
  },
  '#modal field': {
    'display': 'flex'
  },
  '#modal form input': {
    'flex': '1',
    'backgroundColor': '8px',
    'borderRadius': '8px 0 0 8px',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 24 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#6c6c80'
  },
  '#modal form button': {
    'width': [{ 'unit': 'px', 'value': 72 }],
    'height': [{ 'unit': 'px', 'value': 72 }],
    'backgroundColor': 'var(--primary-color)',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '0 8px 8px 0'
  },
  '#modal form button:hover': {
    'backgroundColor': '#2fb85e'
  }
});
