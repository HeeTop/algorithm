#include <iostream>
using namespace std;

struct Node {
	int data;
	Node* prev;
	Node* next;
};

Node* head = new Node();
Node* tail = new Node();

void init() {
	// head 초기화
	head->prev = 0;
	head->next = tail;
	// tail 초기화
	tail->prev = head;
	tail->next = 0;

	return;
}
// next와 node 연결
void connect(Node* node, Node* next) {
	Node* prev = next->prev;
	// node와 next 연결
	node->next = next;
	next->prev = node;
	// node와 prev 연결
	node->prev = prev;
	prev->next = node;
	return;
}

void append(int data) {
	Node* node = new Node();
	node->data = data;
	// 마지막(tail)에 연결
	connect(node, tail);
	return;
}

Node* search(int index) {
	int pos = 0;
	for (Node* iter = head->next; iter != tail; iter = iter->next) {
		if (pos == index) {
			return iter;
		}
		pos++;
	}
	return 0;
}

bool insert(int index, int data) {
	Node* next = search(index);
	// index out of range
	if (next == 0) {
		return false;
	}
	Node* node = new Node();
	node->data = data;

	connect(node, next);
	return true;
}

bool replace(int index, int data) {
	Node* node = search(index);
	// index out of range
	if (node == 0) {
		return false;
	}
	node->data = data;
	return true;
}
// 연결 끊는 함수
void disconnect(Node* node) {
	Node* next = node->next;
	Node* prev = node->prev;

	next->prev = prev;
	prev->next = next;
	node->next = node->prev = 0;
}

bool remove(int index) {
	Node* node = search(index);
	// index out of range
	if (node == 0) {
		return false;
	}
	// 연결 끊기
	disconnect(node);
	delete node;

	return true;
}

bool pop(int index, int* data) {
	Node* node = search(index);
	// index out of range
	if (node == 0) {
		return false;
	}
	// 연결 끊고 값을 저장
	*data = node->data;
	disconnect(node);
	delete node;

	return true;
}

void printList(bool reverse = false) {
	if (reverse) {
		for (Node* iter = tail->prev; iter != head; iter = iter->prev) {
			cout << iter->data << " ";
		}
	}
	else {
		for (Node* iter = head->next; iter != tail; iter = iter->next) {
			cout << iter->data << " ";
		}
	}
	cout << endl;
	return;
}

int main() {
	init();
	append(1);
	append(2);
	append(3);
	printList();
	insert(0, -1);
	printList();
	remove(2);
	printList();
	printList(true);
}