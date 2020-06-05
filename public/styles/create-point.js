import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#page-create-point': {
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'maxWidth': [{ 'unit': 'px', 'value': 1100 }],
    // Aliamento da caixa (pelo lado do fora da caixa)
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  '#page-create-point header': {
    'marginTop': [{ 'unit': 'px', 'value': 48 }],
    'display': 'flex',
    'justifyContent': 'space-between',
    'alignItems': 'center'
  },
  '#page-create-point header a': {
    'color': 'var(--title-color)',
    'fontWeight': 'bold',
    'display': 'flex',
    'alignItems': 'center'
  },
  '#page-create-point header a span': {
    'marginRight': [{ 'unit': 'px', 'value': 16 }],
    'backgroundImage': 'url('../assets/arrow-left.svg')',
    'display': 'flex',
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 24 }]
  },
  'form': {
    'backgroundColor': 'white',
    'margin': [{ 'unit': 'px', 'value': 80 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 80 }, { 'unit': 'string', 'value': 'auto' }],
    'padding': [{ 'unit': 'px', 'value': 64 }, { 'unit': 'px', 'value': 64 }, { 'unit': 'px', 'value': 64 }, { 'unit': 'px', 'value': 64 }],
    'borderRadius': '8px',
    'maxWidth': [{ 'unit': 'px', 'value': 730 }]
  },
  'form h1': {
    'fontSize': [{ 'unit': 'px', 'value': 36 }]
  },
  'form fieldset': {
    'marginTop': [{ 'unit': 'px', 'value': 64 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'form legend': {
    'marginBottom': [{ 'unit': 'px', 'value': 40 }],
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'space-between',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'form legend h2': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }]
  },
  'form legend span': {
    'color': 'var(--title-color)',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'form field': {
    'flex': '1',
    'display': 'flex',
    'flexDirection': 'column',
    'marginBottom': [{ 'unit': 'px', 'value': 24 }]
  },
  'form field-group': {
    'display': 'flex'
  },
  'form input': {
    'backgroundColor': '#f0f0f5',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 24 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'borderRadius': '8px',
    // outline: none;
  },
  'form select': {
    'backgroundColor': '#f0f0f5',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 24 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'borderRadius': '8px',
    // outline: none;
  },
  'form select': {
    'WebkitAppearance': 'none',
    'MozAppearance': 'none',
    'appearance': 'none'
  },
  'form label': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'marginBottom': [{ 'unit': 'px', 'value': 8 }]
  },
  'form field-group field+field': {
    'marginLeft': [{ 'unit': 'px', 'value': 24 }]
  },
  'form button': {
    'width': [{ 'unit': 'px', 'value': 260 }],
    'height': [{ 'unit': 'px', 'value': 56 }],
    'marginLeft': [{ 'unit': 'px', 'value': 24 }],
    'backgroundColor': 'var(--primary-color)',
    'borderRadius': '8px',
    'color': 'white',
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 40 }],
    'transform': 'background-color 400ms'
  },
  'form button:hover': {
    'backgroundColor': '#2fb86e'
  },
  'items-grid': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr 1fr',
    'gap': '16px'
  },
  'items-grid li': {
    'backgroundColor': '#f5f5f5',
    'listStyle': 'none',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f5f5f5' }],
    'borderRadius': '8px',
    'height': [{ 'unit': 'px', 'value': 180 }],
    'padding': [{ 'unit': 'px', 'value': 32 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 24 }],
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'justifyContent': 'space-between',
    'textAlign': 'center',
    'cursor': 'pointer'
  },
  'items-grid li span': {
    'marginTop': [{ 'unit': 'px', 'value': 12 }],
    'flex': '1',
    'display': 'flex',
    'alignItems': 'center',
    'color': 'var(--title-color)'
  },
  'items-grid liselected': {
    'background': '#e1faec',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#34cb79' }]
  },
  'items-grid li img': {
    'pointerEvents': 'none'
  },
  'items-grid li span': {
    'pointerEvents': 'none'
  }
});
