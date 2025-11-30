class Solution:
    def maxProduct(self, s: str) -> int:
        n = len(s)
        pal_len = [0] * (1 << n)

        # 부분 수열 만들고 팰린드롬 길이 저장
        for mask in range(1, 1 << n):
            chars = []
            for i in range(n):
                if mask & (1 << i):
                    chars.append(s[i])
            if chars == chars[::-1]:
                pal_len[mask] = len(chars)

        # 길이 큰 순으로 정렬
        pal_masks = [m for m in range(1, 1 << n) if pal_len[m] > 0]
        pal_masks.sort(key=lambda m: pal_len[m], reverse=True)

        ans = 0
        for i, a in enumerate(pal_masks):
            la = pal_len[a]

            # 큰 순서이므로 현재 ans이하이면 더 의미없으므로 가지치기
            if la * la <= ans:
                break
            
            # 첫번째에 맞는 두번째 서로소 팰린드롬 찾기
            for b in pal_masks[i + 1:]:
                lb = pal_len[b]
                if la * lb <= ans:
                    break
                if (a & b) == 0:
                    ans = la * lb
                    break
        return ans
            