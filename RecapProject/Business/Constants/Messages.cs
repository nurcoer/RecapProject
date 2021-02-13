using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Constants
{
    public static class Messages
    {
        public static string ProductAdded = "Ürün Eklendi";
        public static string ProductDeleted = "Ürün Silindi";
        public static string ProductUpdated = "Ürün Güncellendi";
        public static string ProductNameInvalid= "Araç adı en az  2 karakterden oluşmalıdır.";
        public static string ProductDailyPriceInvalid= "Bir Aracın günlük fiyatı 0 olamaz. ";

        public static string ListedProduct = "Araçlar Listelendi";
        public static string GetCarDetailMessage = "Araç Detayı Getirildi";
        public static string GetCarsByBrandId = "Markaya Ait Araçlar Getirildi";
        public static string GetCarsByColorId = "Renkte Araçlar Getirildi";
    }
}
