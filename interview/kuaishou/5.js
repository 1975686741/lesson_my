// 删除链表的一个节点
// 定义函数 deleteNode，接收两个参数：链表头节点 head 和待删除节点的值 val
function deleteNode(head, val) {
    // 如果待删除节点是链表的头节点
    if (head.val === val) {
    return head.next; // 返回头节点的下一个节点
    }
    // 定义两个指针 prev 和 current，分别指向头节点和头节点的下一个节点
    let prev = head;
    let current = head.next;   
    // 遍历链表，直到找到待删除节点或者遍历结束
    while (current !== null && current.val !== val) {
    prev = current; // prev 指向当前节点
    current = current.next; // current 指向下一个节点
    }   
    // 如果找到了待删除节点
    if (current !== null) {
    prev.next = current.next; // 将 prev 的下一个节点指向 current 的下一个节点
    current.next = null; // 释放 current 节点的内存
    }
    return head; // 返回链表头节点
    }
    // 创建一个链表节点类，包含节点值 val 和下一个节点 next
    class ListNode {
    constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    }
    }
    // 创建一个链表实例，包含 5 个节点
    const linkedList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
    // 打印原始链表
    console.log("原始链表：", linkedList);
    // 删除链表中值为 3 的节点
    deleteNode(linkedList, 3);
    // 打印删除节点后的链表
    console.log("删除节点后的链表：", linkedList);



    
// 第二中标方法

// 删除链表的一个节点
class  ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
// head 头指针
// val  值的判断
function deleteNode(head, val) {
    if (!head)  return null;
    // 头节点要被删除
    if (head.val === val) return head.next;
    // 
    let prev = head;
    let curr = head.next;
    // 结尾为空
    while(curr) {
        if (curr.val === val) {
            prev.next = curr.next
            return head;
        }
        prev = curr;
        curr = curr.next;
    }
    // 没有找到
    return head;
}