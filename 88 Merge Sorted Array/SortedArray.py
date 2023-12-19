# PROBLEM LINK https://leetcode.com/problems/merge-sorted-array/
from typing import List


class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        nums1[3:] = nums2
        nums1.sort()

        zeros_count = nums1.count(0)
        nums1[:-zeros_count]


Solution.merge("_", [1, 2, 3, 0, 0, 0], 3,  [2, 5, 6],  3)
