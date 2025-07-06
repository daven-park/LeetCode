class BrowserHistory:

    def __init__(self, homepage: str):
        self.cur = [homepage]
        self.forward_list = []

    def visit(self, url: str) -> None:
        self.cur.append(url)
        self.forward_list = []

    def back(self, steps: int) -> str:
        while len(self.cur) > 1 and steps:
            url = self.cur.pop()
            self.forward_list.append(url)
            steps -= 1

        return self.cur[-1]
    def forward(self, steps: int) -> str:
        if not self.forward_list:
            return self.cur[-1]

        while self.forward_list and steps:
            url = self.forward_list.pop()
            self.cur.append(url)
            steps -= 1

        return self.cur[-1]


# Your BrowserHistory object will be instantiated and called as such:
# obj = BrowserHistory(homepage)
# obj.visit(url)
# param_2 = obj.back(steps)
# param_3 = obj.forward(steps)