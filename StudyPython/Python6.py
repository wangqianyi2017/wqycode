#!/usr/bin/python
# -*- coding: UTF-8 -*-
# __author__ = 'wangqianyi1'

def fin(n):
	a,b = 1,1
	for i in range(n-1):
		a,b = b,a+b
	return a

# 输出了第10个斐波那契数列
print fin(10)

#使用递归
def fib(n):
	if n == 1 or n == 2:
		return 1
	return fib(n-1)+fib(n-2)

# 输出了第10个斐波那契数列
print fib(10)

def fic(n):
	if n == 1:
		return [1]
	if n ==2:
		return [1,1]
	fics = [1,1]
	for i in range(2,n):
		fics.append(fics[-1]+fics[-2])
	return fics

#输出前10个斐波那契数列
print fic(10)

# 输出第n个数

n = int(raw_input("第几个数： "))

# 斐波那契数列的通项公式
f =(1/(5**0.5))*(((1+(5**0.5))/2)**n - ((1-(5**0.5))/2)**n)
print "第%d个数："%n,int(f)

# 输出前n个数列：
l=[1]
for i in range(1,n+1):
    f=(1/(5**0.5))*(((1+(5**0.5))/2)**i - ((1-(5**0.5))/2)**i)
    l.append(int(f))