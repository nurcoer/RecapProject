using System;
using Business.Concrete;
using Businesss.Concrete;
using DataAccess.Concrete.EntityFrameWork;



namespace ConsoleUI
{
    class Program
    {
        static void Main(string[] args)
        {
            //---------------Car Operations-------------
            //CarGetAll();
            //CarAddedTest();
            //CarUpdatedTest();
            //CarDeletedTest();
            //GetCarDetailTest();
            //GetCarsBrandIdTest();
            //GetCarsColorIdTest();

            //---------------Color Operations-------------
            //ColorGetAllTest();
            //ColorAddedTest();
            //ColorUpdatedTest();
            //ColorDeletedTest();

            //---------------Brand Operations-------------
            //BrandAddedTest();
            //BrandAdded();
            //BrandUpdated();
            //BrandDeletedTest();

        }

        private static void BrandDeletedTest()
        {
            BrandManager brandManager = new BrandManager(new EfBrandDal());
            brandManager.Delete(new Entities.Concrete.Brand
            {
                BrandName = "Ben Arabadan Anlamam",
                BrandId = 4
            });
        }

        private static void BrandUpdated()
        {
            BrandManager brandManager = new BrandManager(new EfBrandDal());
            brandManager.Update(new Entities.Concrete.Brand
            {
                BrandName = "Ben Arabadan Anlamam",
                BrandId = 4
            });
        }

        private static void BrandAdded()
        {
            BrandManager brandManager = new BrandManager(new EfBrandDal());
            brandManager.Add(new Entities.Concrete.Brand
            {
                BrandName = "Güle Güle",
                BrandId = 4
            });
        }

        private static void BrandAddedTest()
        {
            BrandManager brandManager = new BrandManager(new EfBrandDal());
            foreach (var item in brandManager.GetAll())
            {
                Console.WriteLine(item.BrandName);
            }
        }

        private static void ColorDeletedTest()
        {
            ColorManager colorManager = new ColorManager(new EfColorDal());
            colorManager.Delete(new Entities.Concrete.Color
            {
                ColorName = "Gri",
                ColorId = 4
            });
        }

        private static void ColorUpdatedTest()
        {
            ColorManager colorManager = new ColorManager(new EfColorDal());
            colorManager.Update(new Entities.Concrete.Color
            {
                ColorName = "Gri",
                ColorId = 4
            });
        }

        private static void ColorAddedTest()
        {
            ColorManager colorManager = new ColorManager(new EfColorDal());
            colorManager.Add(new Entities.Concrete.Color
            {
                ColorName = "Mavi",
                ColorId = 4
            });
        }

        private static void ColorGetAllTest()
        {
            ColorManager colorManager = new ColorManager(new EfColorDal());
            foreach (var item in colorManager.GetAll())
            {
                Console.WriteLine(item.ColorName);
            }
        }

        private static void GetCarsColorIdTest()
        {
            CarManager carManager = new CarManager(new EfCarDal());
            foreach (var item in carManager.GetCarsByColorId(2))
            {
                Console.WriteLine(item.CarName + " " + item.ColorId);
            }
        }

        private static void GetCarsBrandIdTest()
        {
            CarManager carManager = new CarManager(new EfCarDal());
            foreach (var item in carManager.GetCarsByBrandId(1))
            {
                Console.WriteLine(item.CarName + " " + item.BrandId);
            }
        }

        private static void GetCarDetailTest()
        {
            CarManager carManager = new CarManager(new EfCarDal());
            foreach (var item in carManager.GetCarDetails())
            {
                Console.WriteLine(item.CarName + " " + item.BrandName);
            }
        }

        private static void CarDeletedTest()
        {
            CarManager carManager = new CarManager(new EfCarDal());
            carManager.Delete(new Entities.Concrete.Car
            {
                CarId = 10,
                BrandId = 2,
                ColorId = 1,
                CarName = "Ford",
                DailyPrice = 100,
                Description = "Ford",
                ModelYear = "2015"
            });
        }

        private static void CarUpdatedTest()
        {
            CarManager carManager = new CarManager(new EfCarDal());
            carManager.Update(new Entities.Concrete.Car
            {
                CarId = 10,
                BrandId = 2,
                ColorId = 1,
                CarName = "Ford",
                DailyPrice = 100,
                Description = "Ford",
                ModelYear = "2015"
            });
        }

        private static void CarAddedTest()
        {
            CarManager carManager = new CarManager(new EfCarDal());
            carManager.Add(new Entities.Concrete.Car
            {
                CarId = 10,
                BrandId = 2,
                ColorId = 2,
                CarName = "Ford",
                DailyPrice = 100,
                Description = "Ford",
                ModelYear = "2015"
            });
        }

        private static void CarGetAll()
        {
            CarManager carManager = new CarManager(new EfCarDal());
            foreach (var item in carManager.GetAll())
            {
                Console.WriteLine(item.CarName);
            }
        }
    }
}
