class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False


class WordDictionary:
    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        node.is_end = True

    def dfs(self, word, idx, node):
        if idx == len(word):
            return node.is_end
        ch = word[idx]

        if ch == '.':
            for nxt in node.children.values():
                if self.dfs(word, idx + 1, nxt):
                    return True
            return False
        else:
            if ch not in node.children:
                return False
            return self.dfs(word, idx + 1, node.children[ch])


    def search(self, word: str) -> bool:
        return self.dfs(word, 0, self.root)


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)