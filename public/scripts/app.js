'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoApp = function (_React$Component) {
    _inherits(TodoApp, _React$Component);

    function TodoApp() {
        _classCallCheck(this, TodoApp);

        return _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).apply(this, arguments));
    }

    _createClass(TodoApp, [{
        key: 'render',
        value: function render() {
            var title = 'TodoApp';
            var subtitle = 'Organized schedule';
            var options = ['Thing one', 'Thing two', 'Thing three'];
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, null),
                React.createElement(Options, { options: options }),
                React.createElement(AddOption, null)
            );
        }
    }]);

    return TodoApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'p',
            null,
            props.subtitle
        )
    );
};

var Action = function (_React$Component2) {
    _inherits(Action, _React$Component2);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'handlePick',
        value: function handlePick() {
            alert('Seattle is awesome');
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.handlePick },
                    'What should I do?'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

// handleRemoveAll
// remove data options

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this3 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this3.handleRemoveAll = _this3.handleRemoveAll.bind(_this3);
        return _this3;
    }

    _createClass(Options, [{
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {
            console.log('Remove data options');
            console.log(this.props.options);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.handleRemoveAll },
                    'Remove All'
                ),
                this.props.options.map(function (option) {
                    return React.createElement(Option, { key: option, optionText: option });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText
    );
};

var AddOption = function (_React$Component4) {
    _inherits(AddOption, _React$Component4);

    function AddOption() {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            if (option) {
                alert(option);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('app'));
