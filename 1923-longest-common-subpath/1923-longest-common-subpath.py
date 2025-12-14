class Solution:
    def longestCommonSubpath(self, n: int, paths: List[List[int]]) -> int:

        def isDuplicate(path, k, p, idd, l):
            base1, base2 = 256, 257
            mod1, mod2 = (1<<63)-1,  (1<<61)-1
            h1, h2 = 0, 0
            pk1, pk2 = pow(base1, k, mod1), pow(base2, k, mod2)

            for i in range(k):
                h1 = (h1 * base1 + path[i]) % mod1
                h2 = (h2 * base2 + path[i]) % mod2

            comb_hash = (h1, h2)
            p[comb_hash].add(idd)

            if len(p[comb_hash]) == l:
                return 1

            for i in range(k, len(path)):
                h1 = (h1 * base1 - path[i-k] * pk1 + path[i]) % mod1
                h2 = (h2 * base2 - path[i-k] * pk2 + path[i]) % mod2

                comb_hash = (h1, h2)
                p[comb_hash].add(idd)

                if len(p[comb_hash]) == l:
                    return 1

            return 0

        def rabin_karp(k):
            
            p, l = defaultdict(set), len(paths)

            for i in range(l):
                val = isDuplicate(paths[i], k, p, i, l)

                if val == 1:
                    return True

            return False

        l, r = 1, math.inf
        maxx = 0

        for path in paths:
            r = min(r, len(path))

        while l <= r:
            m = l+(r-l)//2

            if rabin_karp(m):
                maxx = m
                l = m+1
            else:
                r = m-1

        return maxx