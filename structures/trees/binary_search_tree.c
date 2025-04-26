#include <stdio.h>
#include <stdlib.h>

typedef struct node {
    int number;
    struct node *left;
    struct node *right;
} node;


int search(node *tree, int number) {
    if (tree == NULL) {
        return 1;
    }
    else if (number < tree->number) {
        return search(tree->left, number);
    } else if (number > tree->number) {
        return search (tree->right, number);
    } else {
        return 0;
    }
}

int main(void) {
    return 0;
}
