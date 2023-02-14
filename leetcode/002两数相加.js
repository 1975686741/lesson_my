// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
var addTwoNumbers = function(l1, l2) {
    function ListNode(val) {
      this.val = val;
      this.next = null;
    }
    let result, temp;
    let add = 0;
    const getVal = (l) => l ? l.val : 0;
    const getNext = (l) => l ? l.next : l;
    while (l1 || l2) {
        let now = getVal(l1) + getVal(l2) + add;
        add = now >= 10 ? 1 : 0;
        now = now >= 10 ? now - 10 : now;

        if (!result) {
            result = new ListNode(now);
            temp = result;
        } else {
            temp.next = new ListNode(now);
            temp = temp.next;
        }
        l1 = getNext(l1);
        l2 = getNext(l2);
    }
    if (add) temp.next = new ListNode(add);
    return result;
};