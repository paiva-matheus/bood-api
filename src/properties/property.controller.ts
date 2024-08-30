import { RequestHandler } from 'express';
import * as PropertyService from '@/properties/property.service';
import { AppError } from '@/lib/utilityClasses';

export const findAllProperties: RequestHandler = async (req, res) => {
  const sortBy = req.query.sortBy as string;
  const sortOrder = (req.query.sortOrder as 'asc' | 'desc') || 'asc';
  const page = parseInt(req.query.page as string) || 1;
  const pageSize = parseInt(req.query.pageSize as string) || 10;

  const { properties, totalRecords } = await PropertyService.getProperties(
    sortBy,
    sortOrder,
    page,
    pageSize
  );
  res.status(200).json({
    data: properties,
    pagination: {
      page,
      pageSize,
      totalRecords,
      totalPages: Math.ceil(totalRecords / pageSize),
    },
  });
};

export const findProperty: RequestHandler = async (req, res, next) => {
  const property = await PropertyService.getPropertyById(
    req.params.id as string
  );

  if (!property) {
    next(new AppError('notFound', `Property Not Found`));
  } else {
    res.status(200).json({ data: property });
  }
};
