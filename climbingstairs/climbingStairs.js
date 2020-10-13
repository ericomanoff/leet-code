const climbStairs = (stairs) => {

  return climb_stairs(0, stairs)

}

const climb_stairs = (currentStep, stepsRemaining) => {
  if (currentStep > stepsRemaining) {
    return 0;
  }
  if (currentStep === stepsRemaining) {
    return 1;
  }
  return climb_stairs(currentStep + 1, stepsRemaining) + climb_stairs(currentStep + 2, stepsRemaining)
}

module.exports = climbStairs;