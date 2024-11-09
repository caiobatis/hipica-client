/* eslint-disable no-duplicate-imports */
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded'
import { buttonBaseClasses } from '@mui/material/ButtonBase'
import { dividerClasses } from '@mui/material/Divider'
import { menuItemClasses } from '@mui/material/MenuItem'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'
import { selectClasses } from '@mui/material/Select'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import { svgIconClasses } from '@mui/material/SvgIcon'
import { tabClasses } from '@mui/material/Tab'
import { toggleButtonClasses } from '@mui/material/ToggleButton'
import { toggleButtonGroupClasses } from '@mui/material/ToggleButtonGroup'
import type { Components, Theme as MUITheme } from '@mui/material/styles'
import { alpha } from '@mui/material/styles'
import * as React from 'react'
import { brand, gray } from './themePrimitives'

export type Theme = MUITheme & {
  vars: any
}

export const inputsCustomizations: Components<Theme> = {
  MuiButtonBase: {
    defaultProps: {
      disableTouchRipple: true,
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        boxSizing: 'border-box',
        transition: 'all 100ms ease-in',
        '&:focus-visible': {
          outline: `3px solid ${alpha(theme.palette.primary.main, 0.5)}`,
          outlineOffset: '2px',
        },
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: 'none',
        borderRadius: (theme.vars || theme).shape.borderRadius,
        textTransform: 'none',
        // variants: [
        //   {
        //     props: {
        //       size: 'small',
        //     },
        //     style: {
        //       height: '2.25rem',
        //       padding: '8px 12px',
        //     },
        //   },
        //   {
        //     props: {
        //       size: 'medium',
        //     },
        //     style: {
        //       height: '2.5rem', // 40px
        //     },
        //   },
        //   {
        //     props: {
        //       color: 'primary',
        //       variant: 'contained',
        //     },
        //     style: {
        //       color: 'white',
        //       backgroundColor: gray[900],
        //       backgroundImage: `linear-gradient(to bottom, ${gray[700]}, ${gray[800]})`,
        //       boxShadow: `inset 0 1px 0 ${gray[600]}, inset 0 -1px 0 1px hsl(220, 0%, 0%)`,
        //       border: `1px solid ${gray[700]}`,
        //       '&:hover': {
        //         backgroundImage: 'none',
        //         backgroundColor: gray[700],
        //         boxShadow: 'none',
        //       },
        //       '&:active': {
        //         backgroundColor: gray[800],
        //       },
        //       ...theme.applyStyles('dark', {
        //         color: 'black',
        //         backgroundColor: gray[50],
        //         backgroundImage: `linear-gradient(to bottom, ${gray[100]}, ${gray[50]})`,
        //         boxShadow: 'inset 0 -1px 0  hsl(220, 30%, 80%)',
        //         border: `1px solid ${gray[50]}`,
        //         '&:hover': {
        //           backgroundImage: 'none',
        //           backgroundColor: gray[300],
        //           boxShadow: 'none',
        //         },
        //         '&:active': {
        //           backgroundColor: gray[400],
        //         },
        //       }),
        //     },
        //   },
        //   {
        //     props: {
        //       color: 'secondary',
        //       variant: 'contained',
        //     },
        //     style: {
        //       color: 'white',
        //       backgroundColor: brand[300],
        //       backgroundImage: `linear-gradient(to bottom, ${alpha(brand[400], 0.8)}, ${brand[500]})`,
        //       boxShadow: `inset 0 2px 0 ${alpha(brand[200], 0.2)}, inset 0 -2px 0 ${alpha(brand[700], 0.4)}`,
        //       border: `1px solid ${brand[500]}`,
        //       '&:hover': {
        //         backgroundColor: brand[700],
        //         boxShadow: 'none',
        //       },
        //       '&:active': {
        //         backgroundColor: brand[700],
        //         backgroundImage: 'none',
        //       },
        //     },
        //   },
        //   {
        //     props: {
        //       variant: 'outlined',
        //     },
        //     style: {
        //       color: (theme.vars || theme).palette.text.primary,
        //       border: '1px solid',
        //       borderColor: gray[200],
        //       backgroundColor: alpha(gray[50], 0.3),
        //       '&:hover': {
        //         backgroundColor: gray[100],
        //         borderColor: gray[300],
        //       },
        //       '&:active': {
        //         backgroundColor: gray[200],
        //       },
        //       ...theme.applyStyles('dark', {
        //         backgroundColor: gray[800],
        //         borderColor: gray[700],

        //         '&:hover': {
        //           backgroundColor: gray[900],
        //           borderColor: gray[600],
        //         },
        //         '&:active': {
        //           backgroundColor: gray[900],
        //         },
        //       }),
        //     },
        //   },
        //   {
        //     props: {
        //       color: 'secondary',
        //       variant: 'outlined',
        //     },
        //     style: {
        //       color: brand[700],
        //       border: '1px solid',
        //       borderColor: brand[200],
        //       backgroundColor: brand[50],
        //       '&:hover': {
        //         backgroundColor: brand[100],
        //         borderColor: brand[400],
        //       },
        //       '&:active': {
        //         backgroundColor: alpha(brand[200], 0.7),
        //       },
        //       ...theme.applyStyles('dark', {
        //         color: brand[50],
        //         border: '1px solid',
        //         borderColor: brand[900],
        //         backgroundColor: alpha(brand[900], 0.3),
        //         '&:hover': {
        //           borderColor: brand[700],
        //           backgroundColor: alpha(brand[900], 0.6),
        //         },
        //         '&:active': {
        //           backgroundColor: alpha(brand[900], 0.5),
        //         },
        //       }),
        //     },
        //   },
        //   {
        //     props: {
        //       variant: 'text',
        //     },
        //     style: {
        //       color: gray[600],
        //       '&:hover': {
        //         backgroundColor: gray[100],
        //       },
        //       '&:active': {
        //         backgroundColor: gray[200],
        //       },
        //       ...theme.applyStyles('dark', {
        //         color: gray[50],
        //         '&:hover': {
        //           backgroundColor: gray[700],
        //         },
        //         '&:active': {
        //           backgroundColor: alpha(gray[700], 0.7),
        //         },
        //       }),
        //     },
        //   },
        //   {
        //     props: {
        //       color: 'secondary',
        //       variant: 'text',
        //     },
        //     style: {
        //       color: brand[700],
        //       '&:hover': {
        //         backgroundColor: alpha(brand[100], 0.5),
        //       },
        //       '&:active': {
        //         backgroundColor: alpha(brand[200], 0.7),
        //       },
        //       ...theme.applyStyles('dark', {
        //         color: brand[100],
        //         '&:hover': {
        //           backgroundColor: alpha(brand[900], 0.5),
        //         },
        //         '&:active': {
        //           backgroundColor: alpha(brand[900], 0.3),
        //         },
        //       }),
        //     },
        //   },
        // ],
      }),
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: 'none',
        // borderRadius: (theme.vars || theme).shape.borderRadius,
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightMedium,
        letterSpacing: 0,
        color: (theme.vars || theme).palette.text.primary,
        // border: '2px solid ',
        // borderColor: gray[800],
        backgroundColor: alpha(gray[50], 0.9),
        '&:hover': {
          backgroundColor: gray[100],
          borderColor: gray[300],
        },
        '&:active': {
          backgroundColor: gray[200],
        },
        // ...theme.applyStyles('dark', {
        //   backgroundColor: gray[800],
        //   borderColor: gray[700],
        //   '&:hover': {
        //     backgroundColor: gray[900],
        //     borderColor: gray[600],
        //   },
        //   '&:active': {
        //     backgroundColor: gray[900],
        //   },
        // }),
        variants: [
          {
            props: {
              size: 'small',
            },
            style: {
              width: '2.25rem',
              height: '2.25rem',
              padding: '0.25rem',
              [`& .${svgIconClasses.root}`]: { fontSize: '1rem' },
            },
          },
          {
            props: {
              size: 'medium',
            },
            style: {
              width: '2.5rem',
              height: '2.5rem',
            },
          },
        ],
      }),
    },
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: '10px',
        boxShadow: `0 4px 16px ${alpha(gray[400], 0.2)}`,
        [`& .${toggleButtonGroupClasses.selected}`]: {
          color: brand[500],
        },
        ...theme.applyStyles('dark', {
          [`& .${toggleButtonGroupClasses.selected}`]: {
            color: '#fff',
          },
          boxShadow: `0 4px 16px ${alpha(brand[700], 0.5)}`,
        }),
      }),
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: '12px 16px',
        textTransform: 'none',
        borderRadius: '10px',
        fontWeight: 500,
        ...theme.applyStyles('dark', {
          color: gray[400],
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
          [`&.${toggleButtonClasses.selected}`]: {
            color: brand[300],
          },
        }),
      }),
    },
  },
  MuiCheckbox: {
    defaultProps: {
      disableRipple: true,
      icon: (
        <CheckBoxOutlineBlankRoundedIcon
          sx={{ color: 'hsla(210, 0%, 0%, 0.0)' }}
        />
      ),
      checkedIcon: <CheckRoundedIcon sx={{ height: 14, width: 14 }} />,
      indeterminateIcon: <RemoveRoundedIcon sx={{ height: 14, width: 14 }} />,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        margin: 10,
        height: 16,
        width: 16,
        borderRadius: 5,
        border: '1px solid ',
        borderColor: alpha(gray[300], 0.8),
        boxShadow: '0 0 0 1.5px hsla(210, 0%, 0%, 0.04) inset',
        backgroundColor: alpha(gray[100], 0.4),
        transition: 'border-color, background-color, 120ms ease-in',
        '&:hover': {
          borderColor: brand[300],
        },
        '&.Mui-focusVisible': {
          outline: `3px solid ${alpha(brand[500], 0.5)}`,
          outlineOffset: '2px',
          borderColor: brand[400],
        },
        '&.Mui-checked': {
          color: 'white',
          backgroundColor: brand[500],
          borderColor: brand[500],
          boxShadow: `none`,
          '&:hover': {
            backgroundColor: brand[600],
          },
        },
        ...theme.applyStyles('dark', {
          borderColor: alpha(gray[700], 0.8),
          boxShadow: '0 0 0 1.5px hsl(210, 0%, 0%) inset',
          backgroundColor: alpha(gray[900], 0.8),
          '&:hover': {
            borderColor: brand[300],
          },
          '&.Mui-focusVisible': {
            borderColor: brand[400],
            outline: `3px solid ${alpha(brand[500], 0.5)}`,
            outlineOffset: '2px',
          },
        }),
      }),
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        border: 'none',
      },
      input: {
        '&::placeholder': {
          opacity: 0.7,
          color: gray[500],
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: {
        padding: 0,
      },
      root: ({ theme }) => ({
        padding: '8px 12px',
        color: (theme.vars || theme).palette.text.primary,
        borderRadius: (theme.vars || theme).shape.borderRadius,
        border: `1px solid ${(theme.vars || theme).palette.divider}`,
        backgroundColor: (theme.vars || theme).palette.background.default,
        transition: 'border 120ms ease-in',
        '&:hover': {
          borderColor: gray[400],
        },
        [`&.${outlinedInputClasses.focused}`]: {
          outline: `3px solid ${alpha(brand[500], 0.5)}`,
          borderColor: brand[400],
        },
        ...theme.applyStyles('dark', {
          '&:hover': {
            borderColor: gray[500],
          },
        }),
        variants: [
          {
            props: {
              size: 'small',
            },
            style: {
              height: '2.25rem',
            },
          },
          {
            props: {
              size: 'medium',
            },
            style: {
              height: '2.5rem',
            },
          },
        ],
      }),
      notchedOutline: {
        border: 'none',
      },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: (theme.vars || theme).palette.grey[500],
        ...theme.applyStyles('dark', {
          color: (theme.vars || theme).palette.grey[400],
        }),
      }),
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        typography: theme.typography.caption,
        marginBottom: 8,
      }),
    },
  },
}

export const surfacesCustomizations: Components<Theme> = {
  MuiAccordion: {
    defaultProps: {
      elevation: 0,
      disableGutters: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        padding: 4,
        overflow: 'clip',
        backgroundColor: (theme.vars || theme).palette.background.default,
        border: '1px solid',
        borderColor: (theme.vars || theme).palette.divider,
        ':before': {
          backgroundColor: 'transparent',
        },
        '&:not(:last-of-type)': {
          borderBottom: 'none',
        },
        '&:first-of-type': {
          borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
          borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
        },
        '&:last-of-type': {
          borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
          borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
        },
      }),
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: ({ theme }) => ({
        border: 'none',
        borderRadius: 8,
        '&:hover': { backgroundColor: gray[50] },
        '&:focus-visible': { backgroundColor: 'transparent' },
        ...theme.applyStyles('dark', {
          '&:hover': { backgroundColor: gray[800] },
        }),
      }),
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: { mb: 20, border: 'none' },
    },
  },
  MuiPaper: {
    defaultProps: {
      elevation: 0,
    },
  },
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          padding: 16,
          gap: 16,
          transition: 'all 100ms ease',
          backgroundColor: gray[50],
          borderRadius: (theme.vars || theme).shape.borderRadius,
          border: `1px solid ${(theme.vars || theme).palette.divider}`,
          boxShadow: 'none',
          ...theme.applyStyles('dark', {
            backgroundColor: gray[800],
          }),
          variants: [
            {
              props: {
                variant: 'outlined',
              },
              style: {
                border: `2px solid ${(theme.vars || theme).palette.divider}`,
                boxShadow: 'none',
                background: 'hsl(0, 0%, 100%)',
                ...theme.applyStyles('dark', {
                  background: alpha(gray[50], 0.1),
                }),
              },
            },
          ],
        }
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: 0,
        '&:last-child': { paddingBottom: 0 },
      },
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        // Outlined
        '& .MuiOutlinedInput-root': {
          height: '3rem',
        },
      },
    },
  },
}
export const navigationCustomizations: Components<Theme> = {
  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: (theme.vars || theme).shape.borderRadius,
        padding: '6px 8px',
        [`&.${menuItemClasses.focusVisible}`]: {
          backgroundColor: 'transparent',
        },
        [`&.${menuItemClasses.selected}`]: {
          [`&.${menuItemClasses.focusVisible}`]: {
            backgroundColor: alpha(theme.palette.action.selected, 0.3),
          },
        },
      }),
    },
  },
  MuiMenu: {
    styleOverrides: {
      list: {
        gap: '0px',
        [`&.${dividerClasses.root}`]: {
          margin: '0 -8px',
        },
      },
      paper: ({ theme }) => ({
        marginTop: '4px',
        borderRadius: (theme.vars || theme).shape.borderRadius,
        border: `1px solid ${(theme.vars || theme).palette.divider}`,
        backgroundImage: 'none',
        background: 'hsl(0, 0%, 100%)',
        boxShadow:
          'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px',
        [`& .${buttonBaseClasses.root}`]: {
          '&.Mui-selected': {
            backgroundColor: alpha(theme.palette.action.selected, 0.3),
          },
        },
        ...theme.applyStyles('dark', {
          background: gray[900],
          boxShadow:
            'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px',
        }),
      }),
    },
  },
  MuiSelect: {
    defaultProps: {
      IconComponent: React.forwardRef<SVGSVGElement, SvgIconProps>(
        (props, ref) => (
          <UnfoldMoreRoundedIcon fontSize="small" {...props} ref={ref} />
        ),
      ),
    },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: (theme.vars || theme).shape.borderRadius,
        border: '1px solid',
        borderColor: gray[200],
        backgroundColor: (theme.vars || theme).palette.background.paper,
        boxShadow: `inset 0 1px 0 1px hsla(220, 0%, 100%, 0.6), inset 0 -1px 0 1px hsla(220, 35%, 90%, 0.5)`,
        '&:hover': {
          borderColor: gray[300],
          backgroundColor: (theme.vars || theme).palette.background.paper,
          boxShadow: 'none',
        },
        [`&.${selectClasses.focused}`]: {
          outlineOffset: 0,
          borderColor: gray[400],
        },
        '&:before, &:after': {
          display: 'none',
        },

        ...theme.applyStyles('dark', {
          borderRadius: (theme.vars || theme).shape.borderRadius,
          borderColor: gray[700],
          backgroundColor: (theme.vars || theme).palette.background.paper,
          boxShadow: `inset 0 1px 0 1px ${alpha(gray[700], 0.15)}, inset 0 -1px 0 1px hsla(220, 0%, 0%, 0.7)`,
          '&:hover': {
            borderColor: alpha(gray[700], 0.7),
            backgroundColor: (theme.vars || theme).palette.background.paper,
            boxShadow: 'none',
          },
          [`&.${selectClasses.focused}`]: {
            outlineOffset: 0,
            borderColor: gray[900],
          },
          '&:before, &:after': {
            display: 'none',
          },
        }),
      }),
      select: ({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        ...theme.applyStyles('dark', {
          display: 'flex',
          alignItems: 'center',
          '&:focus-visible': {
            backgroundColor: gray[900],
          },
        }),
      }),
    },
  },
  MuiLink: {
    defaultProps: {
      underline: 'none',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        color: (theme.vars || theme).palette.text.primary,
        fontWeight: 500,
        position: 'relative',
        textDecoration: 'none',
        width: 'fit-content',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '1px',
          bottom: 0,
          left: 0,
          backgroundColor: (theme.vars || theme).palette.text.secondary,
          opacity: 0.3,
          transition: 'width 0.3s ease, opacity 0.3s ease',
        },
        '&:hover::before': {
          width: 0,
        },
        '&:focus-visible': {
          outline: `3px solid ${alpha(brand[500], 0.5)}`,
          outlineOffset: '4px',
          borderRadius: '2px',
        },
      }),
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: ({ theme }) => ({
        backgroundColor: (theme.vars || theme).palette.background.default,
      }),
    },
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&.Mui-selected': {
          color: 'white',
          backgroundColor: (theme.vars || theme).palette.grey[900],
        },
        ...theme.applyStyles('dark', {
          '&.Mui-selected': {
            color: 'black',
            backgroundColor: (theme.vars || theme).palette.grey[50],
          },
        }),
      }),
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: { minHeight: 'fit-content' },
      indicator: ({ theme }) => ({
        backgroundColor: (theme.vars || theme).palette.grey[800],
        ...theme.applyStyles('dark', {
          backgroundColor: (theme.vars || theme).palette.grey[200],
        }),
      }),
    },
  },
  MuiTab: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: '6px 8px',
        marginBottom: '8px',
        textTransform: 'none',
        minWidth: 'fit-content',
        minHeight: 'fit-content',
        color: (theme.vars || theme).palette.text.secondary,
        borderRadius: (theme.vars || theme).shape.borderRadius,
        border: '1px solid',
        borderColor: 'transparent',
        ':hover': {
          color: (theme.vars || theme).palette.text.primary,
          backgroundColor: gray[100],
          borderColor: gray[200],
        },
        [`&.${tabClasses.selected}`]: {
          color: gray[900],
        },
        ...theme.applyStyles('dark', {
          ':hover': {
            color: (theme.vars || theme).palette.text.primary,
            backgroundColor: gray[800],
            borderColor: gray[700],
          },
          [`&.${tabClasses.selected}`]: {
            color: '#fff',
          },
        }),
      }),
    },
  },
  MuiStepConnector: {
    styleOverrides: {
      line: ({ theme }) => ({
        borderTop: '1px solid',
        borderColor: (theme.vars || theme).palette.divider,
        flex: 1,
        borderRadius: '99px',
      }),
    },
  },
  MuiStepIcon: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: 'transparent',
        border: `1px solid ${gray[400]}`,
        width: 12,
        height: 12,
        borderRadius: '50%',
        '& text': {
          display: 'none',
        },
        '&.Mui-active': {
          border: 'none',
          color: (theme.vars || theme).palette.primary.main,
        },
        '&.Mui-completed': {
          border: 'none',
          color: (theme.vars || theme).palette.success.main,
        },
        ...theme.applyStyles('dark', {
          border: `1px solid ${gray[700]}`,
          '&.Mui-active': {
            border: 'none',
            color: (theme.vars || theme).palette.primary.light,
          },
          '&.Mui-completed': {
            border: 'none',
            color: (theme.vars || theme).palette.success.light,
          },
        }),
        variants: [
          {
            props: { completed: true },
            style: {
              width: 12,
              height: 12,
            },
          },
        ],
      }),
    },
  },
  MuiStepLabel: {
    styleOverrides: {
      label: ({ theme }) => ({
        '&.Mui-completed': {
          opacity: 0.6,
          ...theme.applyStyles('dark', { opacity: 0.5 }),
        },
      }),
    },
  },
}
