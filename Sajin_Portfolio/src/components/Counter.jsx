import { useSpring, animated } from '@react-spring/web';

function Counter({ value, start }) {

  const { number } = useSpring({
    from: { number: 1 },
    number: start ? value : 1,
    delay: 200,
    config: {
      duration: 500,
      tension: 120,
    }
  });

  return (
    <animated.span>
      {number.to(value => Math.floor(value))}
    </animated.span>
  );
};

export default Counter;