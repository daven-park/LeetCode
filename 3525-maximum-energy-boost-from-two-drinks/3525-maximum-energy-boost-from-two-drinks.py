class Solution:
    def maxEnergyBoost(self, energyDrinkA: List[int], energyDrinkB: List[int]) -> int:
        rA = 0
        rB = 0
        for a, b in zip(energyDrinkA, energyDrinkB):
            rA, rB = max(rB, rA + a), max(rA, rB + b)
        return max(rA, rB)