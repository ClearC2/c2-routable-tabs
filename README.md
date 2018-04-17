# c2-routable-tabs [![CircleCI](https://circleci.com/gh/ClearC2/c2-routable-tabs.svg?style=svg)](https://circleci.com/gh/ClearC2/c2-routable-tabs)

The routable tabs component combines bootstrap v4's tabs with react-router v4's router.

## Usage
```jsx
import {Tabs, Tab} from 'c2-routable-tabs'

function Example () {
    return (
        <Tabs className='my-custom-tabs'>
          <Tab to='/' exact title='Home'>
            Test
          </Tab>
          <Tab to='/bar' title='Bar'>
            Bar
          </Tab>
          <Tab to='/baz' title='Baz'>
            Baz
          </Tab>
        </Tabs>
    )
}
```

[See the working example.](example/src/App.js)

## `<Tabs/>` Props
#### `className: string`
Additional class name(s) you would like to apple to the container `div`.

#### `children: Tab|Tab[]`
`Tab` components.

## `<Tab/>` Props
#### `to: string`
React router path.

#### `exact: boolean`
When true, will activate tab only when the location is matched exactly.

#### `title: string`
Title of the tab.

#### `subtabs: array|[{to: string, title: string}]`
Array of objects containing `to` and `title` props.