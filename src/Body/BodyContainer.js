import { connect } from "react-redux";
import Body from "./Body";

const mapStateToProps = ({
  array,
  currentBubbleTwo,
  currentQuickTwo,
  pivot,
  currentSwappers,
  currentHeapThree,
  currentSorted,
  currentMergeX,
}) => ({
  array,
  currentBubbleTwo,
  currentQuickTwo,
  pivot,
  currentSwappers,
  currentHeapThree,
  currentSorted,
  currentMergeX,
});

const maoDispatchToProps = () => dispatch => ({

});

export default connect(mapStateToProps, maoDispatchToProps)(Body);