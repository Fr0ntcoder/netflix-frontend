import { NextPage } from 'next'
import { ReactNode } from 'react'

export type TypeRoles = {
	isAdmin?: boolean
	isUser?: boolean
}

export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles

export type TypeComponentAuthField = {
	Component: TypeRoles
	children: ReactNode
}
