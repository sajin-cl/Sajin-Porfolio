import { useSpring, animated } from '@react-spring/web';

function Counter({ value, start }) {

  const { count } = useSpring({
    from: { count: 1 },
    to: { count: start ? value : 1 },
    delay: 200,
    config: {
      duration: 500,
      tension: 120,
    }
  });

  return (
    <animated.span>
      {count.to(value => Math.floor(value))}
    </animated.span>
  );
};

export default Counter;