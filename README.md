## language-toggle-loader

这是一个简体转台湾繁体的插件，使用方式如下

vue

```javascript
{
    test: /\.(js|vue)$/,
    loader: 'language-toggle-loader',
}
```

react

```javascript
{
    test: /\.(js|.jsx)$/,
    loader: 'language-toggle-loader',
}
```
注意：这个在使用过程中可能会造成打包速度变慢。