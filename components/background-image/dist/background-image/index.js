"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

var _spinner = _interopRequireDefault(require("../spinner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BackgroundImage = function BackgroundImage(props) {
  var src = props.src,
      color = props.color,
      opacity = props.opacity,
      transition = props.transition,
      width = props.width,
      height = props.height,
      radius = props.radius,
      position = props.position,
      size = props.size,
      onClick = props.onClick;

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var ghost = (0, _react.useRef)();
  var image = (0, _react.useRef)();

  var _useState5 = (0, _react.useState)({
    position: position,
    width: width,
    height: height,
    backgroundColor: color,
    borderRadius: radius
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      bgContainerStyle = _useState6[0],
      setBgContainerStyle = _useState6[1];

  var _useState7 = (0, _react.useState)({
    // background: `url(${src}) no-repeat center center fixed`,
    background: "url(".concat(src, ") no-repeat center center"),
    backgroundSize: size,
    // cover|auto|contain
    width: width,
    height: height,
    borderRadius: radius,
    transition: "opacity ".concat(transition)
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      bgStyle = _useState8[0],
      setBgStyle = _useState8[1];

  var getCalculatedDimension = function getCalculatedDimension(width, height) {
    // FIXME
    // à repenser complètement
    if (width !== "100%" && (!height || height === "auto")) {
      var intWidth = parseInt(width.replace("px", ""), 10);
      var heightWRatio = parseInt(ghost.current.height / (ghost.current.width / intWidth), 10);
      return {
        width: "".concat(intWidth, "px"),
        height: "".concat(heightWRatio, "px")
      };
    } else {
      return {
        width: width,
        height: height // return { width: ghost.current.width, height: ghost.current.height }

      };
    }
  };

  (0, _react.useEffect)(function () {
    setError(false);
    setLoading(true);

    if (src) {
      ghost.current = new Image();
      ghost.current.src = src;

      ghost.current.onload = function () {
        setBgContainerStyle(function (prev) {
          return _objectSpread({}, prev, {}, getCalculatedDimension(width, height));
        });
        setBgStyle(function (prev) {
          return _objectSpread({}, prev, {}, getCalculatedDimension(width, height), {
            background: "url(".concat(src, ") no-repeat center center")
          });
        });
        setLoading(false);
      };

      ghost.current.onerror = function () {
        setLoading(false);
        setBgStyle(function (prev) {
          return _objectSpread({}, prev, {
            background: ""
          });
        });
        setError("Image not found");
      };
    }
  }, [src, width, height]);
  (0, _react.useEffect)(function () {
    image.current.style.opacity = 0;

    if (!loading) {
      // opacity et backgroundSize ne passent que par le biais de la ref, 
      // seulement une fois que l'image est réellement loadée
      image.current.style.opacity = opacity;
      image.current.style.backgroundSize = size;
    }
  }, [loading, size, opacity]);
  return _react.default.createElement("div", {
    className: "bgContainer",
    style: bgContainerStyle,
    onClick: onClick
  }, _react.default.createElement("div", {
    ref: image,
    className: "bg",
    style: bgStyle
  }), loading && _react.default.createElement(_spinner.default, null), _react.default.createElement("div", {
    style: {
      position: "relative"
    }
  }, !loading && !error && props.children, error));
};

BackgroundImage.propTypes = {
  src: _propTypes.default.string.isRequired,
  position: _propTypes.default.string,
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  opacity: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  color: _propTypes.default.string,
  transition: _propTypes.default.string,
  radius: _propTypes.default.string,
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
BackgroundImage.defaultProps = {
  src: "",
  position: "relative",
  width: "300px",
  height: "300px",
  opacity: "1",
  color: "#ccc",
  transition: "1s",
  radius: "0",
  size: "cover",
  onClick: function onClick() {}
};
var _default = BackgroundImage;
exports.default = _default;

//# sourceMappingURL=index.js.map